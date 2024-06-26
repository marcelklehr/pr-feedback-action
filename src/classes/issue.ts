import {isLabeled} from '../functions/is-labeled';
import {isPullRequest} from '../functions/is-pull-request';
import {Assignee} from '../interfaces/assignee';
import {IIssue, OctokitIssue} from '../interfaces/issue';
import {IIssuesProcessorOptions} from '../interfaces/issues-processor-options';
import {ILabel} from '../interfaces/label';
import {IMilestone} from '../interfaces/milestone';
import {IsoDateString} from '../types/iso-date-string';
import {Operations} from './operations';

export class Issue implements IIssue {
  readonly user: string | undefined;
  readonly isBot: boolean | undefined;
  readonly title: string;
  readonly number: number;
  created_at: IsoDateString;
  updated_at: IsoDateString;
  readonly labels: ILabel[];
  readonly pull_request: object | null | undefined;
  readonly state: string | 'closed' | 'open';
  readonly locked: boolean;
  readonly milestone?: IMilestone | null;
  readonly assignees: Assignee[];
  askedForFeedback: boolean;
  markedStaleThisRun: boolean;
  operations = new Operations();
  private readonly _options: IIssuesProcessorOptions;

  constructor(
    options: Readonly<IIssuesProcessorOptions>,
    issue: Readonly<OctokitIssue> | Readonly<IIssue>
  ) {
    this._options = options;
    this.title = issue.title;
    this.number = issue.number;
    this.created_at = issue.created_at;
    this.updated_at = issue.updated_at;
    this.labels = mapLabels(issue.labels);
    this.pull_request = issue.pull_request;
    this.state = issue.state;
    this.locked = issue.locked;
    this.milestone = issue.milestone;
    this.assignees = issue.assignees || [];
    this.askedForFeedback = isLabeled(this, this.feedbackLabel);
    this.markedStaleThisRun = false;
    this.user = typeof issue.user === 'string'? issue.user : issue.user?.login;
    this.isBot = 'isBot' in issue?  issue.isBot : typeof issue.user === 'object'? issue.user?.type === 'Bot' : false
  }

  get isPullRequest(): boolean {
    return isPullRequest(this);
  }

  get feedbackLabel(): string {
    return this._getStaleLabel();
  }

  get hasAssignees(): boolean {
    return this.assignees.length > 0;
  }

  private _getStaleLabel(): string {
    return this._options.feedbackLabel;
  }
}

function mapLabels(labels: (string | ILabel)[] | ILabel[]): ILabel[] {
  return labels.map(label => {
    if (typeof label == 'string') {
      return {
        name: label
      };
    }
    return label;
  });
}
