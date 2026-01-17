const { parse } = require('url');
const { URL } = require('url');

const parseUrl = (url) => {
  const parsedUrl = parse(url);
  return {
    scheme: parsedUrl.protocol,
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname,
  };
};

const parseUrlOptions = (url, options) => {
  const parsedUrl = parseUrl(url);
  return {
    ...parsedUrl,
    protocol: options.protocol,
    hostname: options.hostname,
    port: options.port,
    pathname: options.pathname,
  };
};

const URLParser = class {
  constructor() {
    this.options = {
      protocol: '',
      hostname: '',
      port: '',
      pathname: '',
    };
  }

  parse(url) {
    const parsedUrl = parseUrl(url);
    this.options = {
      ...this.options,
      ...parsedUrl,
    };
  }

  toString() {
    return new URL(this.options);
  }
};

module.exports = { parseUrl, parseUrlOptions, URLParser };