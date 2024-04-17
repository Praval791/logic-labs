#!/bin/bash

RTE=0
CE=0

memArr=(3500 7500 95000 19000)
initMem=0

if [ "$lang" = "c" ]; then
    initMem=${memArr[0]}
    if gcc -o solution solution.c &> "$outPutFile"; then
        if { cat testcase.txt | /usr/bin/time -f "%e %M" -o "$timeMemoFile" timeout "$probTime"s ./solution &> "$outPutFile"; } || { RTE=1; }; then
            :
        fi
    else
        CE=1
    fi
elif [ "$lang" = "cpp" ]; then
    initMem=${memArr[1]}
    if g++ -o solution solution.cpp &> "$outPutFile"; then
        if { cat testcase.txt | /usr/bin/time -f "%e %M" -o "$timeMemoFile" timeout "$probTime"s ./solution &> "$outPutFile"; } || { RTE=1; }; then
            :
        fi
    else
        CE=1
    fi
elif [ "$lang" = "java" ]; then
    initMem=${memArr[2]}
    if javac solution.java &> "$outPutFile"; then
        if { cat testcase.txt | /usr/bin/time -f "%e %M" -o "$timeMemoFile" timeout "$probTime"s java solution &> "$outPutFile"; } || { RTE=1; }; then
            :
        fi
    else
        CE=1
    fi
elif [ "$lang" = "py" ]; then
    initMem=${memArr[3]}
    if { cat testcase.txt | /usr/bin/time -f "%e %M" -o "$timeMemoFile" timeout "$probTime"s python3 solution.py &> "$outPutFile"; } || { RTE=1; }; then
        :
    fi
fi

if [ "$CE" -ne 0 ]; then
    echo "COMPILATION ERROR" >> "$outPutFile"
fi

if [ "$RTE" -ne 0 ]; then
    echo "RUNTIME ERROR" >> "$outPutFile"
fi


if [ "$CE" -eq 0 ] && [ "$RTE" -eq 0 ]; then
    arr=($(<"$timeMemoFile"))
    if [ "${arr[0]}" = "Command" ]; then
        arr=("${arr[2]}" "${arr[3]}")
    fi

    time=$((arr[0] * 1000))
    memory=$((arr[1] - initMem))

    timeDiff=$((4 * 1000 - time))
    if [ "$timeDiff" -le 0 ]; then
        echo "TLE" >> "$outPutFile"
    fi

    memDiff=$((5 * 1000 - memory))
    if [ "$memDiff" -le 0 ]; then
        echo "MLE" >> "$outPutFile"
    fi
fi

echo -e "\n$time" >> "$timeMemoFile"
echo "$memory" >> "$timeMemoFile"
