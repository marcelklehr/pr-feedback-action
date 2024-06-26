export enum Option {
  RepoToken = 'repo-token',
  FeedbackMessage = 'stale-issue-message',
  DaysBeforeFeedback = 'days-before-feedback',
  DaysBeforeClose = 'days-before-close',
  DaysBeforeIssueClose = 'days-before-issue-close',
  DaysBeforePrClose = 'days-before-pr-close',
  StaleIssueLabel = 'stale-issue-label',
  CloseIssueLabel = 'close-issue-label',
  ExemptIssueLabels = 'exempt-issue-labels',
  ExemptAuthors = 'exempt-authors',
  ExemptBots = 'exempt-bots',
  StalePrLabel = 'stale-pr-label',
  ClosePrLabel = 'close-pr-label',
  ExemptLabels = 'exempt-labels',
  OnlyLabels = 'only-labels',
  OnlyIssueLabels = 'only-issue-labels',
  OnlyPrLabels = 'only-pr-labels',
  AnyOfLabels = 'any-of-labels',
  OperationsPerRun = 'operations-per-run',
  RemoveStaleWhenUpdated = 'remove-stale-when-updated',
  RemoveIssueStaleWhenUpdated = 'remove-issue-stale-when-updated',
  RemovePrStaleWhenUpdated = 'remove-pr-stale-when-updated',
  DebugOnly = 'debug-only',
  Ascending = 'ascending',
  DeleteBranch = 'delete-branch',
  StartDate = 'start-date',
  ExemptMilestones = 'exempt-milestones',
  ExemptIssueMilestones = 'exempt-issue-milestones',
  ExemptPrMilestones = 'exempt-pr-milestones',
  ExemptAllMilestones = 'exempt-all-milestones',
  ExemptAllIssueMilestones = 'exempt-all-issue-milestones',
  ExemptAllPrMilestones = 'exempt-all-pr-milestones',
  ExemptAssignees = 'exempt-assignees',
  ExemptIssueAssignees = 'exempt-issue-assignees',
  ExemptPrAssignees = 'exempt-pr-assignees',
  ExemptAllAssignees = 'exempt-all-assignees',
  ExemptAllIssueAssignees = 'exempt-all-issue-assignees',
  ExemptAllPrAssignees = 'exempt-all-pr-assignees',
  EnableStatistics = 'enable-statistics',
  LabelsToRemoveWhenStale = 'labels-to-remove-when-stale',
  LabelsToRemoveWhenUnstale = 'labels-to-remove-when-unstale',
  LabelsToAddWhenUnstale = 'labels-to-add-when-unstale',
  IgnoreUpdates = 'ignore-updates',
  IgnoreIssueUpdates = 'ignore-issue-updates',
  IgnorePrUpdates = 'ignore-pr-updates',
  ExemptDraftPr = 'exempt-draft-pr',
  CloseIssueReason = 'close-issue-reason'
}
