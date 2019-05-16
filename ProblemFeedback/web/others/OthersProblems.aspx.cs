using ProblemFeedback.data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web.others
{
    public partial class OthersProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// 提交数据
        /// </summary>
        [WebMethod]
        public static int SubmitOthersProblems(string content_othersP) {
            var p_date = DateTime.Now.ToString("yyyy-MM-dd");
            DBHelper db = new DBHelper();
            Hashtable hstable = new Hashtable();
            hstable.Add("pInfo","其他疑问");
            hstable.Add("pTitle", "其他疑问");
            hstable.Add("pContent", content_othersP);
            hstable.Add("pPerson", "匿名");
            hstable.Add("pSubmitDate", p_date);
            hstable.Add("isResolve", "0");
            hstable.Add("isSetting", "1");
            hstable.Add("hotValue", "1");
            int result = db.AddIdData(hstable);
            return result;
        }
    }
}