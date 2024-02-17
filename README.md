### Contribution workflow

Pull the latest changes from `main`:

```
git pull origin main
```

Make a feature branch.
Feature branches should be prefixed with a category (e.g. `feature/`, `bugfix/`, `docs/`) and followed by a short description of the changes added.

```
git switch -c feature/add-a-cool-button
```

Make and commit all the changes needed for the new feature.

```
git commit <...>
```

Push changes up to the remote.
If new changes have been added to `main` since you started your feature branch,
you will first need to _rebase_ your changes on top of `main` befor making a pull request
(this may require resolving merge conflicts locally).

```
git pull --rebase origin main
git push origin feature/add-a-cool-button
```

Make a pull request on Github.
Merge the branch as a merge commit and delete the old branch.
