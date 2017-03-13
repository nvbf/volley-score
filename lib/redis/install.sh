REDIS=$(find . -type f -name redis-*.*.*tar.gz)
TARGET_DIR=redis

if [[ -d $TARGET_DIR ]]; then
    echo Seems like redis is installed.
else
    mkdir -p $TARGET_DIR
    tar xzf $REDIS -C $TARGET_DIR --strip-components=1
    cd $TARGET_DIR && make
fi;
