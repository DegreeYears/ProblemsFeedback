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
        /// 
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        public static string GetDate() {
            string dataStr = "";
            string dateData = DateTime.Now.ToString("yyyy-MM-dd");
            string sqlStr = "select *from "+
                "(select count(*) a from ProblemsInfos  where isSetting = 1) as a,"+
                "(select count(*) b from ProblemsInfos  where isSetting = 1 and isResolve = 1)as b,"+
                "(select count(*) b from ProblemsInfos where isSetting = 1 and pSubmitDate like '"+ dateData + "') as c";
            DBHelper dBHelper = new DBHelper();
            DataSet dataSet = new DataSet();
            dataSet = dBHelper.SelectData(sqlStr);
            if (dataSet != null)
            {
                dataStr = "[{today_p:'" + dataSet.Tables[0].Rows[0][2] + "',his_p:'" + dataSet.Tables[0].Rows[0][0] + "',resolved_p:'" + dataSet.Tables[0].Rows[0][1] + "'}]";
                return dataStr;
            }
            else
            {
                return null;
            }
        }
        /// <summary>
        /// 获取问题json数据信息
        /// </summary>
        [WebMethod]
        public static string GetProblems(string flag)
        {
            //最有解为调用存储过程
            string dataStr = "";
            string sqlStr = "";
            if (flag == "0")
            {
                sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 order by pSubmitDate DESC";
            }
            else
            {
                var str = flag.Split(',');
                if (str[str.Length - 1] == "已解决")
                {
                    if (str[0] == "全部" || str[0] == "已解决")
                    {
                        sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 and isResolve=1 order by pSubmitDate DESC ";
                    }
                    else
                    {
                        sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 and isResolve=1 and (";
                        for (int i = 0; i < str.Length - 1; i++)
                        {
                            sqlStr = sqlStr + "pInfo=" + "'" + str[i].ToString() + "' " + "or ";
                        }
                        sqlStr = sqlStr.Substring(0, sqlStr.Length - 3) + ") order by pSubmitDate DESC";
                    }
                }
                else if (str[str.Length - 1] == "未解决")
                {
                    if (str[0] == "全部" || str[0] =="未解决")
                    {
                        sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 and isResolve=0 order by pSubmitDate DESC ";
                    }
                    else
                    {
                        sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 and isResolve=0 and (";
                        for (int i = 0; i < str.Length - 1; i++)
                        {
                            sqlStr = sqlStr + "pInfo=" + "'" + str[i].ToString() + "' " + "or ";
                        }
                        sqlStr = sqlStr.Substring(0, sqlStr.Length - 3) + ") order by pSubmitDate DESC";
                    }
                }
                else
                {
                    if (str[0] =="全部")
                    {
                        sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 order by pSubmitDate DESC";
                    }
                    else
                    {
                        sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 and (";
                        for (int i = 0; i <= str.Length - 1; i++)
                        {
                            sqlStr = sqlStr + "pInfo=" + "'" + str[i].ToString() + "' " + "or ";
                        }
                        sqlStr = sqlStr.Substring(0, sqlStr.Length - 3) + ") order by pSubmitDate DESC";
                    }
                }
            }
            DBHelper dBHelper = new DBHelper();
            DataSet dataSet = new DataSet();
            dataSet = dBHelper.SelectData(sqlStr);

            if (dataSet != null)
            {
                for (int i = 0; i < dataSet.Tables[0].Rows.Count; i++)
                {
                    dataStr = dataStr + "{person:'" + dataSet.Tables[0].Rows[i][8].ToString() + "',title:" + "'" + dataSet.Tables[0].Rows[i][3].ToString() + "',date:" + "'" + dataSet.Tables[0].Rows[i][0].ToString() + "',id:'" + dataSet.Tables[0].Rows[i][1] + "'}";
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
