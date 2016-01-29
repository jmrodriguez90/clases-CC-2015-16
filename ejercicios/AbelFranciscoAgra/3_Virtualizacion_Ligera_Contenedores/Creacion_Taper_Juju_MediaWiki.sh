#!/bin/bash
juju add-machine
juju deploy mysql
juju deploy mediawiki
juju add-relation mediawiki:db mysql
juju expose mediawiki