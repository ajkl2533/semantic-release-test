module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    {name: 'master', channel: 'stable'},
    {name: 'next-major', channel:'next'},
    {name: 'beta', channel:'beta', prerelease: true},
    {name: 'alpha', channel:'alpha', prerelease: true}
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        tarballDir: "release",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "release/*.tgz",
      },
    ],
    "@semantic-release/git",
    "semantic-release-export-data",
  ],
  preset: "angular",
};
