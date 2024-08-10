#################################################################################
# COMMANDS                                                                      #
#################################################################################

## Install Dependencies
requirements: 
	rbenv install
	bundle install

## Deploy Locally
local:
	eval "$(rbenv init -)"
	bundle exec jekyll serve

