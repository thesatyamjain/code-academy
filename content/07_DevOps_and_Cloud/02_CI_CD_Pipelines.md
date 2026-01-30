# 02. CI/CD Pipelines 🔄

Humans are bad at repetitive tasks. We forget steps. We get tired.
Robots don't.
**CI/CD** is the robot butler that tests and ships your code for you.

## 1. CI: Continuous Integration
**Goal**: Catch bugs immediately.
Every time you push code to GitHub, the robot wakes up. It installs your app and runs your tests.
- **Green Light ✅**: Safe to merge.
- **Red Light ❌**: You broke something. Fix it before anyone sees.

## 2. CD: Continuous Deployment
**Goal**: Ship software automatically.
If the tests pass (Green Light), the robot automatically takes that code and puts it on the live server.
No more SSH-ing into servers at 3 AM to deployment manually.

## 3. GitHub Actions
You can program this robot using a simple YAML file in your repo (`.github/workflows/main.yml`).

```yaml
name: Deploy Robot
on: [push]

jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test  # <-- If this fails, the robot stops here.
      - run: npm run deploy
```

## 4. Environments: Safety Buffers
- **Development**: Your Laptop (Chaos allowed).
- **Staging**: An exact clone of Production. Test here one last time.
- **Production**: Where real users live. Don't break this.
