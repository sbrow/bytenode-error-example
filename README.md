# Bytenode Error Example

This repo illustrates an error that occurs when making calls to `Buffer` in an electron renderer process.

# Usage

Before starting, install node and clone the repo.

## Step One

```bash
$ yarn build && yarn start
```

You should see the text: `Hello, World!` in the window.

## Step Two

```bash
$ yarn compile && yarn start
```

If you open the devtools, you'll find an error: `Uncaught TypeError: Cannot read property 'from' of undefined`,
indicating that `Buffer` does not exist.

## Conclusion

Bytenode seems to think `Buffer` does not exist, even though it does.
