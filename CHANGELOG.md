# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2021-05-24

### Fixed

- Support use of refs ( `"$ref"` ) in headers.

### Changed

- License set as Apache 2.0.

## [1.0.0] - 2021-05-21

### Added

- CHANGELOG.md introduced

### Changed

- Instead of default exporting swagger2har, we now `export { swagger2har, createHar }` This way apps can access createHar directly if needed.
