using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web.hot
{
    public partial class HotProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// 获取热点问题json数据信息
        /// 后期可改变为调用接口
        /// </summary>
        [WebMethod]
        public static string GetHotProblems() {
            SqlConnection con = null;
            SqlCommand cmd = null;
            string jsonStr = "";
            string conStr = @"server=.\sqlexpress;database=problemsSubmit;integrated security=true";
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    string sqlStr = "select top 10 * from problemsSubmit.dbo.ProblemsInfos where isSetting =1 order by hotValue DESC";
                    cmd = new SqlCommand(sqlStr, con);
                    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(cmd);
                    DataSet dataSet = new DataSet();
                    sqlDataAdapter.Fill(dataSet, "HotProblems");
                    string dataStr = "";
                    ArrayList p_list = new ArrayList();
                    for (int i = 0; i < dataSet.Tables[0].Rows.Count; i++)
                    {
                        dataStr = dataStr + "{name:'" + dataSet.Tables[0].Columns[2].ToString() + "',value:" + "'" + dataSet.Tables[0].Rows[i][2].ToString() + "'}";
                        if (i != dataSet.Tables[0].Rows.Count - 1)
                        {
                            dataStr = dataStr + ",";
                        }
                    }
                    jsonStr = "[" + dataStr + "]";
                    return jsonStr;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return jsonStr;
        }
       
    }
}