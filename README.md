# moon - Setup moon and toolchain

A GitHub action that sets up an environment for moon by...

Installing the `moon` binary globally using the
[official installation script](https://moonrepo.dev/docs/install), and appending the installation
directory to `PATH`.

And also caching the moon toolchain at `~/.moon`, keyed by hashing the `.moon/toolchain.yml`
configuration file found in the repository.

## Installation

```yaml
# ...
jobs:
  ci:
    name: CI
    runs-on: ubuntu-latest
    steps:
      - uses: moonrepo/setup-moon-action@v1
      - run: moon ci
```

## Inputs

- `version` - Version of moon to explicitly install. Defaults to "latest".
