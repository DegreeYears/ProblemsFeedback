using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;

namespace ProblemFeedback.web.submit
{
    public partial class SubmitProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// 提交点击事件
        /// </summary>
        /// <param name="contents"></param>
        /// <param name="personName"></param>
        /// <param name="department"></param>
        /// <param name="imageUp1"></param>
        /// <param name="imageUp2"></param>
        /// <param name="imageUp3"></param>
        /// <returns></returns>
        [WebMethod]
        public static string SubmitClick(string contents, string personName, string department, string imageUp1, string imageUp2, string imageUp3)
        {
            SqlConnection con = null;
            SqlCommand cmd = null;

            string date = DateTime.Now.ToString("yyyy-MM-dd");
            string info = "销售相关";
            string conStr = @"server=.\sqlexpress;database=problemsSubmit;integrated security=true";
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    string sqlStr = "insert into problemsSubmit.dbo.ProblemsInfos values('" + info + "','" + contents + "','','','','" + personName + "','" + department + "','" + date + "')";
                    cmd = new SqlCommand(sqlStr, con);
                    return cmd.ExecuteNonQuery().ToString();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }
}