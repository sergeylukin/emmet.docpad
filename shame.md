All the dirty hacks used in this project
----------------------------------------

Title: LiveReload - Socket.io fix
Author: Sergey Lukin
Date: 6/7/2013
Commit: https://github.com/sergeylukin/emmet.docpad/commit/73d04c48b96fbaf6fedce8aff86b249e8f818298
Issue: https://github.com/sergeylukin/emmet.docpad/issues/3
What has been done:

    Instead of writing nicely packed docpad plugin I
    added lots of code with condition statements to the codebase.
    The reason is I'm not sure if that fix really solves the problem
    so I wanted to test it asap.

What should be done:

    All the code added in that commit should be packed into a plugin
