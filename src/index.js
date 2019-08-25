const message = "Hello, World!";

const buff = Buffer.from(message.toString("binary"));

document.writeln(buff.toString());
