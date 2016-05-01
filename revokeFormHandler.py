#!/usr/bin/python

import cgi
import base

from connect import connect
import mysql.connector
import cgitb; cgitb.enable()

def inRevokeList( test_id ) : 

    db = connect(0)
    cur = db.cursor()

    cur.execute("SELECT test_id FROM TestRevoke where test_id=%i"%test_id)
    rows = cur.fetchall()
    #print rows

    return not rows==[] 

def addTestToRevokeList( test_id ) :

    db = connect(1)
    cur = db.cursor()

    cur.execute("INSERT INTO TestRevoke SET test_id=%i,comment='%s'"%(test_id,comments))
    db.commit()

#cgi header
print "Content-type: text/html\n"

form = cgi.FieldStorage()
test_id = base.cleanCGInumber(form.getvalue("test_id"))
comments = form.getvalue("comments")

base.header(title='Revoke')
base.top()

print '<br><br>'

if not inRevokeList( test_id ) : 
    addTestToRevokeList( test_id ) 
    print 'Done'
else :
    print 'Test already revoked...'

base.bottom()

