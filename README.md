# create-y

Have you ever created a new npm package by running `npm init -y` so that you can
skip the interactive questionnaire about your package's description, repository,
and license?

I know I have!

But have you *also* forgotten to put a `-` character in front of your `y`? Me
too!

Thanks to [npm init](https://docs.npmjs.com/cli/init)'s otherwise goofy and
surprising behavior of taking whatever is passed after `init` and searching the
registry for `create-nonsense@latest` in order to execute `npx create-nonsense`,
we were able to recover from this frequent typo by publishing `create-y`.

Please enjoy!

Also, don't run `npm init -y y`.
