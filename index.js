class SassyLogger {
    static log(message, level) {
      const prefixes = {
        debug: "🔍 Just a little check-in",
        info: "💤 It’s cute that you think this matters.",
        warn: "🤡 Plot twist...",
        error: "🔥 Absolute disaster incoming",
        fatal: "💀 Hope you updated your will",
        oops: '😬 That’s on you...',
        blessed: '✨ The universe has smiled upon us',
      };
  
      const prefix = prefixes[level] || "🤷 Whatever";
      console.log(`[${prefix}] ${message}`);
    }
  
    static debug(msg) { this.log("debug", msg); }
    static info(msg) { this.log("info", msg); }
    static warn(msg) { this.log("warn", msg); }
    static error(msg) { this.log("error", msg); }
    static fatal(msg) { this.log("fatal", msg); }
    static oops(msg) { this.log("oops", msg); }
    static fatal(msg) { this.log("fatal", msg); } 
  }
  
  module.exports = SassyLogger;