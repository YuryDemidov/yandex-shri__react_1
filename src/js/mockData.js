export const mockBuilds = {
  data: [
    {
      id: '32a85f64-5717-4562-b3fc-2c963f66afa6',
      configurationId: '32a85f64-5717-4562-b3fc-2c963f66afa6',
      buildNumber: 1368,
      commitMessage: 'add documentation for postgres scaler',
      commitHash: 'b4326ab',
      branchName: 'supwer-bwanch',
      authorName: 'Vadim Makeev',
      status: 'Waiting',
      start: '2021-06-19T12:33:25.966Z',
      duration: 80
    },
    {
      id: '31a85f64-5717-4562-b3fc-2c963f66afa6',
      configurationId: '31a85f64-5717-4562-b3fc-2c963f66afa6',
      buildNumber: 1232,
      commitMessage: 'Super cool UI kit for making websites that look like games',
      commitHash: '11636ab',
      branchName: 'master',
      authorName: 'Philip Kirkorov',
      status: 'Success',
      start: '2021-04-19T02:33:25.966Z',
      duration: 120
    },
    {
      id: '1fa85f64-5717-4562-b3fc-2c963f66afa6',
      configurationId: '1fa85f64-5717-4562-b3fc-2c963f66afa6',
      buildNumber: 1231,
      commitMessage: 'improved accessibility',
      commitHash: 'b4136ab',
      branchName: 'master',
      authorName: 'Philip Kirkorov',
      status: 'Success',
      start: '2021-06-13T18:33:25.966Z',
      duration: 800
    },
    {
      id: '2fa85f64-5717-4562-b3fc-2c963f66afa6',
      configurationId: '2fa85f64-5717-4562-b3fc-2c963f66afa6',
      buildNumber: 1111,
      commitMessage: 'upgrade typescript to 3.8',
      commitHash: 'b4631ab',
      branchName: 'master',
      authorName: 'Vadim Makeev',
      status: 'Fail',
      start: '2021-06-19T11:33:25.966Z',
      duration: 30
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      buildNumber: 41411,
      commitMessage: 'add documentation for postgres scaler',
      commitHash: 'b4636ab',
      branchName: 'master',
      authorName: 'Philip Kirkorov',
      status: 'Success',
      start: '2021-06-19T12:33:25.966Z',
      duration: 2
    }
  ]
};

export const mockConfig = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  repoName: 'philip1967/my-awesome-repo-with-long-long-repo-name',
  buildCommand: 'npm run super-build',
  mainBranch: 'main',
  period: 10
}
