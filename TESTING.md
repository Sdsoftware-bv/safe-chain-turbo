# Testing Guide

This monorepo uses Jest with TypeScript support (via ts-jest) for testing across all packages and apps.

## Running Tests

### Run all tests across the monorepo

```bash
pnpm turbo test
```

This will run tests in all workspaces in parallel, respecting the dependency graph defined in `turbo.json`.

### Run tests in a specific workspace

```bash
# From the root
pnpm --filter pkg-a test

# Or navigate to the package
cd packages/pkg-a
pnpm test
```

### Run tests in watch mode

```bash
# From the root, for all packages
pnpm turbo test:watch

# For a specific package
pnpm --filter pkg-a test:watch
```

### Run tests with coverage

```bash
# From the root, for all packages
pnpm turbo test:coverage

# For a specific package
pnpm --filter pkg-a test:coverage
```

## Writing Tests

Tests use Jest, which provides a powerful testing framework with built-in assertions, mocking, and more.

### Example test file

```typescript
import { myFunction } from "./index";

describe("myFunction", () => {
  test("should do something", () => {
    expect(myFunction()).toBe(expected);
  });
});
```

Note: Jest's globals (`describe`, `test`, `expect`, etc.) are available automatically - no imports needed!

### Test file naming

- Use `.test.ts` or `.test.tsx` suffix for test files
- Place tests next to the code they test (e.g., `index.ts` and `index.test.ts`)

## Shared Test Configuration

The `tooling-config` package contains shared test configuration:

- `jest.config.base.js` - Base Jest configuration that all workspaces extend
- Each workspace has its own `jest.config.js` that extends the base config

## Turbo Caching

Tests are cached by Turbo based on:
- Test file contents
- Source code changes
- Dependencies

This means unchanged packages won't re-run tests, making CI and local development much faster.

## Coverage

Coverage reports are generated in the `coverage/` directory of each workspace and are included in Turbo's cache outputs.

## Continuous Integration

The CI workflow (`.github/workflows/ci.yml`) runs automatically on every push and pull request:

### What Runs in CI

1. **Lint** - Code quality checks
2. **Type Check** - TypeScript type validation
3. **Build** - Builds all packages
4. **Test** - Runs all tests
5. **Coverage** - Generates coverage reports

### CI Features

- **Dependency caching** - Uses pnpm's built-in caching for faster installs
- **Vercel Remote Cache** - Shares build and test cache across CI runs and team members (requires setup - see [REMOTE_CACHE_SETUP.md](REMOTE_CACHE_SETUP.md))
- **Frozen lockfile** - Ensures reproducible builds with `--frozen-lockfile`
- **Parallel execution** - Turbo runs tests in parallel across packages
- **Coverage artifacts** - Coverage reports are uploaded and accessible from the Actions tab for 30 days

> **Note**: Remote caching requires setting up `TURBO_TOKEN` and `TURBO_TEAM` secrets in GitHub. See [REMOTE_CACHE_SETUP.md](REMOTE_CACHE_SETUP.md) for detailed setup instructions.
