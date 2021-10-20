#!/usr/bin/env bash
#
# Deploy script to fetch, clean, build and check app.sensix.io.
#
# Run this script from the `web` package, like this:
#
# bin/deploy.sh
# bin/deploy.sh -h
# bin/deploy.sh --clean


ROOT_PATH=${ROOT_PATH:=`pwd`}
BUILD_PATH=${BUILD_PATH:=${ROOT_PATH}/build_mirror}  # Build folder path for Nginx.
URL=${URL:=`localhost:8100`}  # Website URL.
GIT_BRANCH=${GIT_BRANCH:=develop}
GIT_SHOULD_FETCH=${GIT_SHOULD_FETCH:=0}
SHOULD_CLEAN=${SHOULD_CLEAN:=0}
SHOULD_CHECK=${SHOULD_CHECK:=0}
BUILD_VERSION_FILE_PATH=${ROOT_PATH}/build/static/build_version.txt

function check_error()
{
    # Function. Parameter 1 is the return code
    # Para. 2 is text to display on failure.
    if [[ "${1}" -ne "0" ]]; then
        echo "[ERROR] # ${1} : ${2}"
        # as a bonus, make our script exit with the right error code.
        exit ${1}
    fi
}

function fetch()
{
    cd ${ROOT_PATH}

    if [[ ${GIT_SHOULD_FETCH} -eq 1 ]]; then
        echo ""
        echo "* Fetching latest code for branch ${GIT_BRANCH}"

        git checkout ${GIT_BRANCH}

        git reset --hard
        git pull

        check_error $? "Git pull failed"
    fi
}

function clean()
 {
    if [[ ${SHOULD_CLEAN} -eq 1 ]]; then
        echo ""
        echo "* Cleaning"

        echo "Delete build folders"
        rm -rf ${ROOT_PATH}/build
        echo "Delete .cache folders"
        rm -rf ${ROOT_PATH}/.cache

        echo "Delete node_modules folder"
        rm -rf ${ROOT_PATH}/node_modules
        rm -rf ${ROOT_PATH}/node_modules
        echo "Delete yarn.lock file"
        rm ${ROOT_PATH}/yarn.lock
        rm ${ROOT_PATH}/yarn.lock
    fi
}

function build()
{
    echo ""
    echo "* Building"

    yarn install
    check_error $? "Yarn install failed"

    yarn build
    check_error $? "Yarn build failed"

    echo "Write the git sha version"
    git rev-parse HEAD > ${BUILD_VERSION_FILE_PATH}

    echo "Delete old build folder"
    rm -r ${BUILD_PATH}

    echo "Create build mirror folder for Nginx to serve from"
    mv ${ROOT_PATH}/build ${BUILD_PATH}

    echo "Copy back build folder to help speed the next build"
    cp -r ${BUILD_PATH} ${ROOT_PATH}/build
}

function check()
{
    if [[ ${SHOULD_CHECK} -eq 1 ]]; then
        echo ""
        echo "* Checking"

        current_sha=$(wget -qO- ${URL}/static/build_version.txt)
        check_error $? "No current build version registered."

        expected_sha=`git rev-parse HEAD`
        check_error $? "Could not get git expected version from local repo."

        if [[ "${current_sha}" == "${expected_sha}" ]]; then
            echo "Successfully built version ${expected_sha} accessible at ${URL}"
        else
            echo "[ERROR] Current build version ${current_sha} is different from the expected version ${expected_sha}"
            exit 1
        fi
    fi
}

function usage()
{
    echo "Deploy script."
    echo ""
    echo "bin/deploy.sh"
    echo "    -h | --help"
    echo "        Script usage tips."
    echo ""
    echo "    -c | --clean"
    echo "        Clean node modules and cache before deploying."
    echo ""
    echo "    -f | --git-fetch"
    echo "        Fetch latest git version from remote before deploying."
    echo ""
    echo "    -b | --branch=whatever"
    echo "        Use a specific branch, default is 'develop'".
}

while [[ "$1" != "" ]]; do
    PARAM=`echo $1 | awk -F= '{print $1}'`
    VALUE=`echo $1 | awk -F= '{print $2}'`
    case ${PARAM} in
        -h | --help)
            usage
            exit
            ;;
        -c | --clean)
            SHOULD_CLEAN=1
            ;;
        -f | --git-fetch)
           GIT_SHOULD_FETCH=1
            ;;
        -b | --branch)
           GIT_BRANCH=${VALUE}
            ;;
        *)
            echo "[ERROR] Unknown parameter \"${PARAM}\""
            usage
            exit 1
            ;;
    esac
    shift
done

echo "* Environment vars:"
echo ""
echo "CLONE_PATH=${ROOT_PATH}"
echo "BUILD_PATH=${BUILD_PATH}"
echo "URL=${URL}"
echo "GIT_BRANCH=${GIT_BRANCH}"
echo "GIT_SHOULD_FETCH=${GIT_SHOULD_FETCH}"
echo "SHOULD_CLEAN=${SHOULD_CLEAN}"
echo "SHOULD_CHECK=${SHOULD_CHECK}"
echo "---"
echo ""

fetch

echo "Start deploying!"

clean
build
check

exit 0
