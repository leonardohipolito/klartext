#!/bin/sh

basedir=`dirname "$0"`
$basedir/data/bin/node --debug --harmony $basedir/data/app.js & wait
