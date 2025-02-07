
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nghihua/sassy-logger" style="font-size: 48px;">
    💅
  </a>

  <h3 align="center">Sassy Logger</h3>

  <p align="center">
    A logger utility, but sassy.
    <br />
    <a href="https://github.com/nghihua/sassy-logger"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nghihua/sassy-logger/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/nghihua/sassy-logger/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

As an attempt to publish my first NPM package, I create this logger utility to basically prefix your logs with a sassy remark. Happy coding!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Getting Started

### Installation

This package is hosted on NPM and therefore can be installed with:
* npm
  ```sh
  npm install sassy-logger
  ```

### Usage

Log with specific methods:
  ```javascript
    import SassyLogger from 'sassy-logger';

    SassyLogger.debug("Initializing API client with parameters...");  
    // Output: [🔍 Just a little check-in] Initializing API client with parameters...

    SassyLogger.info("Server is running on port %d.", port);  
    // Output: [💤 It’s cute that you think this matters.] Server is running on port 3000

    SassyLogger.warn("API rate limit almost exceeded.");  
    // Output: [🤡 Plot twist...] API rate limit almost exceeded.

    SassyLogger.error("Unexpected shutdown.");  
    // Output: [🔥 Absolute disaster incoming] Unexpected shutdown.

    SassyLogger.fatal("System crash! Shutting down.");  
    // Output: [💀 Hope you updated your will] System crash! Shutting down.

    SassyLogger.oops("Missed a semicolon, causing the syntax error.");  
    // Output: [😬 That’s on you...] Missed a semicolon, causing the syntax error.

    SassyLogger.blessed("Successfully deployed the latest version!");  
    // Output: [✨ The universe has smiled upon us] Successfully deployed the latest version!
  ```
Generic log method:
  ```javascript
    import SassyLogger from 'sassy-logger';

    // default
    SassyLogger.log("Returned value is 36.");  
    // Output: [🤷 Whatever] Initializing API client with parameters...

    // with level
    SassyLogger.log("Returned value is 36.", "debug");  
    // Output: [🔍 Just a little check-in] Initializing API client with parameters...
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Nghi Hua - https://nghihua.io.vn/

<p align="right">(<a href="#readme-top">back to top</a>)</p>