using ProblemFeedback.data;
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
        /// 获取热点问题数据信息
        /// 取10条热点
        /// </summary>
        [WebMethod]
        public static string GetHotProblems() {
            string dataStr = "";
            string sqlStr = "select top 10 * from problemsSubmit.dbo.ProblemsInfos where isSetting =1 order by hotValue DESC";
            DBHelper dBHelper = new DBHelper();
            DataSet dataSet = new DataSet();
            dataSet = dBHelper.SelectData(sqlStr);

            if (dataSet != null)
            {
                for (int i = 0; i < dataSet.Tables[0].Rows.Count; i++)
                {
                    dataStr = dataStr + "{name:'" + dataSet.Tables[0].Columns[2].ToString() + "',value:" + "'" + dataSet.Tables[0].Rows[i][2].ToString() + "',id:"+"'"+ dataSet.Tables[0].Rows[i][0]+"'}";
                    if (i != dataSet.Tables[0].Rows.Count - 1)
                    {
                        dataStr = dataStr + ",";
                    }
                }
                string jsonStr = "[" + dataStr + "]";
                return jsonStr;
            }
            else {
                return null;
            }
        }
       
    }
}