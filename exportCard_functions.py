from connect import connect
import mysql.connector
import base
import cgi, os
import cgitb; cgitb.enable()
import settings
from datetime import date

def get( sn ): 

    db = connect(0)
    cur = db.cursor()
    
    cur.execute("SELECT sn , Card_id FROM Card ORDER by sn ASC")
    rows = cur.fetchall()

    for card in rows : 
        if card[0] == sn :
            return card[1]
    
    return -1
    

def export( sn ):

    id = get( sn )

    d = date.fromordinal(730920) # 730920th day after 1. 1. 0001
    os.system("export PATH=/usr/local/mysql/bin:$PATH;mysql --user='root' --password='22Dogbyte!' eportage --xml -e 'select * from test where card_id={0}' > /Users/awhitbe1/Desktop/{1}_tests_{2}.xml".format(id,sn,d.isoformat()))

    print "<p>"
    print "export PATH=/usr/local/mysql/bin:$PATH;mysql --user='root' --password='22Dogbyte!' eportage --xml -e 'select * from test where card_id={0}' > /Users/awhitbe1/Desktop/{1}_tests_{2}.xml".format(id,sn,d.isoformat())
    print "<br>"
    print "data for QIE card {0} has been save to /Users/awhitbe1/Desktop/{0}_tests_{1}.xml".format(sn,d.isoformat())
