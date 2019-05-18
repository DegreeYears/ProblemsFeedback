using ProblemFeedback.data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web.resolve
{
    public partial class ResolveProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }
        [WebMethod]
        public static int IsResolve() {
            return 1;

        }
        /// <summary>
        /// 更新页面
        /// </summary>
        /// <param name="id">0,1</param>
        [WebMethod]
        public static string UpdateView(int id)
        {
            DBHelper db = new DBHelper();
            DataSet ds = new DataSet();
            var strSql = "";
            var dataStr = "";
            if (id == 0)
            {
                strSql = "select top 1 * from problemsSubmit.dbo.ProblemsInfos where isSetting =1 order by hotValue DESC";
            }
            else
            {
                strSql = "select * from problemsSubmit.dbo.ProblemsInfos where isSetting =1 and id=" + id;
            }
            ds = db.SelectData(strSql);
            if (ds.Tables[0].Rows[0][10].ToString() == "1")
            {
                var strSql2 = "select * from ProblemsResolveInfos where pId ="+id;
                DataSet ds2 = new DataSet();
                ds2 = db.SelectData(strSql2);
                dataStr = dataStr + "[{" +
                    "flag:'" + 1 +
                    "',title:'" + ds.Tables[0].Rows[0][2].ToString() +
                    "',content:" + "'"+ ds.Tables[0].Rows[0][3].ToString() +
                    "',image1:" + "'" + ds.Tables[0].Rows[0][4].ToString() +
                    "',image2:" + "'" + ds.Tables[0].Rows[0][5].ToString() +
                    "',image3:" + "'" + ds.Tables[0].Rows[0][6].ToString() +
                    "',person:" + "'" + ds.Tables[0].Rows[0][7].ToString() +
                    "',date:" + "'" + ds.Tables[0].Rows[0][9].ToString() +
                    "',resolve:" + "'" + ds.Tables[0].Rows[0][10].ToString() +
                    "',hotvalue:" + "'" + ds.Tables[0].Rows[0][12].ToString() +
                    "',id:" + "'" + ds.Tables[0].Rows[0][0] +
                    "',r_content:" + "'" + ds2.Tables[0].Rows[0][2].ToString() +
                    "',r_image1:" + "'" + ds2.Tables[0].Rows[0][5].ToString() +
                    "',r_image2:" + "'" + ds2.Tables[0].Rows[0][6].ToString() +
                    "',r_image3:" + "'" + ds2.Tables[0].Rows[0][7].ToString() +
                    "'}]";
            }
            else if(ds.Tables[0].Rows[0][10].ToString() == "0")
            {
                dataStr = dataStr + "[{" +
                    "flag:'" + 2 +
                    "',title:'" + ds.Tables[0].Rows[0][2].ToString() +
                    "',content:" + "'" + ds.Tables[0].Rows[0][3].ToString() +
                    "',image1:" + "'" + ds.Tables[0].Rows[0][4].ToString() +
                    "',image2:" + "'" + ds.Tables[0].Rows[0][5].ToString() +
                    "',image3:" + "'" + ds.Tables[0].Rows[0][6].ToString() +
                    "',person:" + "'" + ds.Tables[0].Rows[0][7].ToString() +
                    "',date:" + "'" + ds.Tables[0].Rows[0][9].ToString() +
                    "',resolve:" + "'" + ds.Tables[0].Rows[0][10].ToString() +
                    "',hotvalue:" + "'" + ds.Tables[0].Rows[0][12].ToString() +
                    "',id:" + "'" + ds.Tables[0].Rows[0][0] + 
                    "'}]";
            }
            return dataStr;
        }
    }
}