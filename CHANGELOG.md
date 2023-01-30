# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2023-01-30

### Fixed

- Fixes a bug with the example code snippets where an empty header value would break rendering.

## [1.0.3] - 2023-01-13

### Fixed

- Various package updates.

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
