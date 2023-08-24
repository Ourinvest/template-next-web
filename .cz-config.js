module.exports = {
    types: [
      { value: 'feat', name: 'feat: A new feature' },
      { value: 'bug', name: 'bug: A bug fix' },
      { value: 'hotfix', name: 'hotfix: Urgent fix' },
      { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
      { value: 'doc', name: 'doc: Documentation only changes' },
      { value: 'test', name: 'test: Adding missing tests' },
      { value: 'chore', name: 'chore: Non-functional change, such as updating dependencies or configuring build tools.' },
    ],
    scopes: [
        { name: 'front' },
        { name: 'bff' },
    ],
    usePreparedCommit: true,
    allowTicketNumber: true,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'BIZ-',
    ticketNumberRegExp: '\\d{1,3}',
    messages: {
      type: "Select the type of change that you're committing:",
      scope: '\nDenote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #BIZ-1, #:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  };