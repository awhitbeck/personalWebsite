import re

def header(title=''):
    print '<head>'
    print '<link  rel="stylesheet" href="/static/css/bootstrap.min.css">'
    print '<link  rel="stylesheet" href="/static/css/style.css">'
    print '<title> %s </title>' %title
    print '</head>'

def top():
    print '<body class="custom-body">'
    print '<div class="center-panel">'
    print '<div style="height:300px;">'
    print '<div class="container">'
    print '<div class="row">'
    print '<div align=left><img src="/us-cms.png" class="img-responsive"></div>'
    print '<div align=center>'
    print '<br><h1 style="color:blue"> &emsp;&emsp;&emsp; HCAL Upgrade: <br> HF Frontend Quality Assurance Testing  </h1>'
    print '<br>'
    print '</div>'
    print '</div>'
    print '</div>'
    print                               '<div class ="row" align=center >'
    print                                   '<div class = "col-md-12">'
    print                                       '<a href="home_page.py">'
    print                                           '<button>  HOME  </button>'
    print                                       '</a>'
    print                                       '<a href="summary.py">'
    print					    '<button>  Summary  </button>'
    print					'</a>'
    print					'<a href="testers.py">'
    print					    '<button>  Testers  </button>'
    print   				        '</a>'
    print					'<a href="testSetup.py">'
    print					    '<button>  Setup  </button>'
    print					'</a>'
    print                                   '</div>'
    print                                   '<br><br><br>'
    print                               '</div>'
    print                               '</div>'


def bottom():

    print '</div>'
    print '</body>'
    print '</html>'
    
def cleanCGInumber(cgitext):
    if cgitext is None:
        return 0
    return int(re.sub('[^0-9]','',cgitext))

