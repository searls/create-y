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

<img width="790" alt="screen shot 2018-08-23 at 3 17 18 pm" src="https://user-images.githubusercontent.com/79303/44554925-a7f04e00-a6e7-11e8-9d95-4f4d604c49e0.png">

Please enjoy!

Also, don't run `npm init -y y`.
