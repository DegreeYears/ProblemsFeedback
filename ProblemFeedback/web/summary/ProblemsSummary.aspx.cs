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
        /// 后期可改变为调用接口
        /// </summary>
        [WebMethod]
        public static string GetProblems() {
            SqlConnection con = null;
            SqlCommand cmd = null;
            string jsonStr = "";
            string conStr = @"server=.\sqlexpress;database=problemsSubmit;integrated security=true";
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    string sqlStr = "select  convert(char(10),GetDate(),120) as pp ,* from problemsSubmit.dbo.ProblemsInfos  where isSetting=1 order by pSubmitDate DESC";
                    cmd = new SqlCommand(sqlStr, con);
                    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(cmd);
                    DataSet dataSet = new DataSet();
                    sqlDataAdapter.Fill(dataSet, "HotProblems");
                    string dataStr = "";
                    ArrayList p_list = new ArrayList();
                    for (int i = 0; i < dataSet.Tables[0].Rows.Count; i++)
                    {
                        dataStr = dataStr + "{person:'" + dataSet.Tables[0].Rows[i][8].ToString() + "',title:" + "'" + dataSet.Tables[0].Rows[i][3].ToString() + "',date:"+"'" + dataSet.Tables[0].Rows[i][0].ToString()+ "'}";
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
//protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
//{
//    GridView1.EditIndex = e.NewEditIndex;
//    bind(0,0,null,null);
//}
/// <summary>
/// 删除数据
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
//protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
//{
//    //确认删除
//    var id = GridView1.DataKeys[e.RowIndex].Value.ToString();
//    var sqlstr = "update problemsSubmit.dbo.ProblemsInfos set isSetting=0 where id='" + id + "'";
//    con = new SqlConnection(conStr);
//    cmd = new SqlCommand(sqlstr, con);
//    con.Open();
//    cmd.ExecuteNonQuery();
//    con.Close();
//    bind(0,0,null,null);
//}

/// <summary>
/// 数据绑定
/// </summary>
#region
//public void bind(int index1, int index2, string text1, string text2)
//{
//    //index1 0 0 null null
//    //index1 0/1/2 index2 0/1/2/3/4/5
//    //text1 全部/已解决/未解决 text2 全部/销售相关/采购相关/生产相关/库存相关/系统相关
//    string sqlstr = null;
//    string[] textList1 = { "已解决", "未解决" };
//    string[] textList2 = { "销售相关", "采购相关", "生产相关", "库存相关", "系统相关" };
//    if (text1 == null)
//    {
//        sqlstr = "select id,pInfo,pContent,pPerson,convert(char(10),GetDate(),120) as pSubmitDate from ProblemsInfos where isSetting=1";
//    }
//    else if (index1 == 0)
//    {
//        if (index2 == 0)
//        {
//            sqlstr = "select id,pInfo,pContent,pPerson,convert(char(10),GetDate(),120) as pSubmitDate from ProblemsInfos where isSetting=1";
//        }
//        else
//        {
//            sqlstr = "select id,pInfo,pContent,pPerson,convert(char(10),GetDate(),120) as pSubmitDate from ProblemsInfos where isSetting=1 and pInfo='" + textList2[index2 - 1] + "'";
//        }
//    }
//    else
//    {
//        if (index2 == 0)
//        {
//            sqlstr = "select id,pInfo,pContent,pPerson,convert(char(10),GetDate(),120) as pSubmitDate from ProblemsInfos where isSetting=1 and isResolve=" + (index1 - 1);
//        }
//        else
//        {
//            sqlstr = "select id,pInfo,pContent,pPerson,convert(char(10),GetDate(),120) as pSubmitDate from ProblemsInfos where isSetting=1 and pInfo='" + textList2[index2 - 1] + "' and isResolve=" + (index1 - 1);
//        }
//    }
//    try
//    {
//        using (con = new SqlConnection(conStr))
//        {
//            con.Open();
//            cmd = new SqlCommand(sqlstr, con);
//            SqlDataAdapter dataAdapter = new SqlDataAdapter();
//            dataAdapter.SelectCommand = cmd;
//            DataSet dataSet = new DataSet();
//            dataAdapter.Fill(dataSet, "ProblemsInfos");
//            this.GridView1.DataSource = dataSet;
//            this.GridView1.DataKeyNames = new string[] { "id" };//主键
//            this.GridView1.DataBind();
//        }
//    }
//    catch (Exception e)
//    {
//        Console.WriteLine(e);
//    }

#endregion
/// <summary>
/// 下拉选择
/// </summary>
/// <param name="index"></param>
//[WebMethod]
//public static void SelectChange1(int index1,int index2,string text1 ,string text2)
//{
//    ProblemsSummary problemsSummary = new ProblemsSummary();
//    problemsSummary.bind(index1,index2,text1,text2);
//}
