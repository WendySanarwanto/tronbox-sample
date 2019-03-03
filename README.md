# tronbox-sample

A sample project which demonstrate how to build, deploy & test [Tron](https://developers.tron.network/docs) Smartcontracts by using [Tronbox](https://github.com/tronprotocol/tron-box).

## Setup's Requirements

* [Node.js](https://nodejs.org/en/download/)

* [Docker](https://docs.docker.com/install/)

* Bash terminal such as [GitBash](https://git-scm.com/downloads), [Ubuntu For Windows](https://tutorials.ubuntu.com/tutorial/tutorial-ubuntu-on-windows#0) or Native Linux Bash.

* [Tronbox](https://github.com/tronprotocol/tron-box) - Run `npm i -g tronbox` for installing it.

## How to run the sample

* Run [Tron](https://developers.tron.network/docs) local dev node through following these steps:

    * Create a directory in home directory: 
        ```bash
        cd ~;
        mkdir tron-data
        ```

    * Open a Bash terminal and then run these bash commands:

        ```bash
        cd ~/tron-data;
        docker run -it -p 9090:9090 \
            --name tron \
            --rm \
            -v $PWD/data:/data \
            -v $PWD/app-data:/data/app \
            -v $PWD/fn/logs:/tron/FullNode/logs \
            -v $PWD/fn/output:/tron/FullNode/output-directory \
            -v $PWD/sn/logs:/tron/SolidityNode/logs \
            -v $PWD/sn/output:/tron/SolidityNode/output-directory \
            trontools/quickstart:1.2.8;
        cd ~;        
        ```
    * Notice list of `Private Keys` that is displayed on the console. Make notes on one of them. We are going to use it in later steps. 

* Clone this repository: `git clone https://github.com/WendySanarwanto/tronbox-sample.git` then change current directory to the cloned repository's directory.

* Open the `tronbox.js` file & modify the `privateKey` entry, under `networks.development` section, with the key you have noted in prior step. Save the modified file.

* Compile the `Messenger.sol` contract: `tronbox compile --compile-all`. Confirm that the compile process created `.json` files under `build` directory.

* Deploy the compiled contract into the running `Tron` node: `tronbox migrate --reset --network development`. Confirm that the compiled contracts have been deployed successfully.

* Run the test: `tronbox test`. Confirm that all tests are passed.
