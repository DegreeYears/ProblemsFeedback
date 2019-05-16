using ProblemFeedback.data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web.summary
{
    public partial class ProblemsSummary : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        /// <summary>
        /// 获取问题json数据信息
        /// </summary>
        [WebMethod]
        public static string GetProblems() {
            string dataStr = "";
            string sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 order by pSubmitDate DESC";
            DBHelper dBHelper = new DBHelper();
            DataSet dataSet = new DataSet();
            dataSet = dBHelper.SelectData(sqlStr);

            if (dataSet != null)
            {
                for (int i = 0; i < dataSet.Tables[0].Rows.Count; i++)
                {
                    dataStr = dataStr + "{person:'" + dataSet.Tables[0].Rows[i][8].ToString() + "',title:" + "'" + dataSet.Tables[0].Rows[i][3].ToString() + "',date:" + "'" + dataSet.Tables[0].Rows[i][0].ToString() + "',id:'"+ dataSet.Tables[0].Rows[i][1] + "'}";
                    if (i != dataSet.Tables[0].Rows.Count - 1)
                    {
                        dataStr = dataStr + ",";
                    }
                }
                string jsonStr = "[" + dataStr + "]";
                return jsonStr;
            }
            else
            {
                return null;
            }
        }
    }
}
