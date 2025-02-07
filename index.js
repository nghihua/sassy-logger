class SassyLogger {
    static log(message, level) {
      const prefixes = {
        debug: "🔍 Just a little check-int",
        info: "💤 It’s cute that you think this matters.",
        warn: "😬 Oh no, how tragic",
        error: "🔥 Absolute disaster incoming",
        oops: '😵 You tried',
        blessed: '✨ The universe has smiled upon us',
        fatal: "💀 Hope you updated your will",
      };
  
      const prefix = prefixes[level] || "🤷 Whatever";
      console.log(`[${prefix}] ${message}`);
    }
  
    static debug(msg) { this.log("debug", msg); }
    static info(msg) { this.log("info", msg); }
    static warn(msg) { this.log("warn", msg); }
    static error(msg) { this.log("error", msg); }
    static fatal(msg) { this.log("fatal", msg); }
  }
  
  module.exports = SassyLogger;