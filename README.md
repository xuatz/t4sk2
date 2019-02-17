An offline-first, 645th attempt to make an awesome todolist for myself. Wish me luck!

# Get Started

## one-command-start

1. install docker
1. `$ git clone <url>`
1. `$ cd t4sk2`
1. `$ docker-compose up -d` (installs and run couchdb container)
   1. `$ docker-compose up --build --force-recreate -d` (might be useful if you are doing development with docker instead of local machine)
1. React - http://localhost:12001/
1. CouchDB - http://localhost:12002/_utils/

## Setup Local Dev Env

1. install docker
1. install git
1. install node
   1. https://github.com/creationix/nvm
1. `$ git clone <url>`
1. `$ cd t4sk2`
1. `$ docker-compose up -d database`
1. `$ npm install`
1. `$ npm start`
1. React - http://localhost:3000/
1. CouchDB - http://localhost:12002/_utils/

# TODOLIST

1.  design/implement a 3 panel layout
1.  implement acc creation, stored in pouchdb
1.  support for offline, no db and no account usage

# Some feature ideas

## Auto archive

Tasks that:

1.  have not been updated for x days (maybe as soon as 4 days)
1.  does not have a deadline
1.  tasks that haven not been fully populated (priority, long or short term, categorised?)

## Active list

1.  Active list should only show 4 tasks at any one time
1.  Order of list goes like this
    1.  overdue tasks (provide a UX to maybe, send to another list, archive, or snooze?, otherwise having alot of overdue tasks and hiding away the upcoming tasks might be a bad UX)
    1.  Tasks with closest deadlines
    1.  Tasks sorted via priority

## Task deadline

1.  Allow users to select quick option of:
    1.  urgent (within 4 hours)
    1.  soon (within 4 days)
    1.  normal (within 4 weeks)
    1.  long-term (within 4 months)
1.  and also, if user wants to input specific date, that would be allowed
1.  the quick options will use relative data to provide suggested deadline, based on:
    1.  no. of overdue
    1.  no. of upcoming (within 4 days?)
    1.  total no. of tasks
