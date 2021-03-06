﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProblemFeedback.data
{
    /// <summary>
    /// 数据库操作类
    /// </summary>
    public class DBHelper
    {
        private SqlConnection con = null;
        private SqlCommand cmd = null;
        //private string conStr = @"server=.\sqlexpress;database=problemsSubmit;integrated security=true";
        private string conStr = @"server=192.168.0.185;database=problemsSubmit;uid=sa;password=Erp1";
        /// <summary>
        /// 根据查询语句查询表数据结果集
        /// </summary>
        public DataSet SelectData(string strSql)
        {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    cmd = new SqlCommand(strSql, con);
                    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(cmd);
                    DataSet dataSet = new DataSet();
                    sqlDataAdapter.Fill(dataSet);
                    return dataSet;
                }
            }
            catch (Exception e)
            {
                //异常写入日志
                return null;
            }
        }
        /// <summary>
        /// 根据表名，id查询表数据结果集
        /// </summary>
        public DataSet SelectIdData(string tableName, string id)
        {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    string strSql = "select * from" + tableName + "where id =" + id;
                    cmd = new SqlCommand(strSql, con);
                    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(cmd);
                    DataSet dataSet = new DataSet();
                    sqlDataAdapter.Fill(dataSet);
                    return dataSet;
                }
            }
            catch (Exception e)
            {
                //异常写入日志
                return null;
            }
        }
        /// <summary>
        /// 根据Hashtable键值添加记录
        /// </summary>
        public int AddIdData(Hashtable hsTable)
        {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    string strSql = "insert into ProblemsInfos (";
                    foreach (var item in hsTable.Keys)
                    {
                        strSql = strSql + item + ",";
                    }
                    strSql = strSql.Substring(0, strSql.Length - 1);
                    strSql += ") values(";
                    foreach (var item in hsTable.Keys)
                    {
                        strSql = strSql + "'" + hsTable[item] + "',";
                    }
                    strSql = strSql.Substring(0, strSql.Length - 1);
                    strSql += ")";
                    con.Open();
                    cmd = new SqlCommand(strSql, con);
                    int result = cmd.ExecuteNonQuery();
                    return result;
                }
            }
            catch (Exception e)
            {
                //异常写入日志
                return 0;
            }
        }
        /// <summary>
        /// 根据表名更新
        /// </summary>
        /// <param name="hsTable"></param>
        /// <returns></returns>
        public int AddData_TableId(Hashtable hsTable,string tableId)
        {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    string strSql = "insert into "+tableId+" (";
                    foreach (var item in hsTable.Keys)
                    {
                        strSql = strSql + item + ",";
                    }
                    strSql = strSql.Substring(0, strSql.Length - 1);
                    strSql += ") values(";
                    foreach (var item in hsTable.Keys)
                    {
                        strSql = strSql + "'" + hsTable[item] + "',";
                    }
                    strSql = strSql.Substring(0, strSql.Length - 1);
                    strSql += ")";
                    con.Open();
                    cmd = new SqlCommand(strSql, con);
                    int result = cmd.ExecuteNonQuery();
                    return result;
                }
            }
            catch (Exception e)
            {
                //异常写入日志
                return 0;
            }
        }
        /// <summary>
        /// 根据新增语句添加记录
        /// </summary>
        public int AddData(string strSql)
        {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    cmd = new SqlCommand(strSql, con);
                    int result = cmd.ExecuteNonQuery();
                    return result;
                }
            }
            catch (Exception e)
            {
                //异常写入日志
                return 0;
            }
        }
        //删
        public void DeleteData()
        {
        }
        //改
        public int SetData_TableId(Hashtable hsTable,string tableId,int id)
        {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    string strSql = "update " + tableId + " set ";
                    foreach (var item in hsTable.Keys)
                    {
                        strSql = strSql + item + "=" + hsTable[item]+" , ";
                    }
                    strSql = strSql.Substring(0, strSql.Length - 2)+" where id="+id;
                    con.Open();
                    cmd = new SqlCommand(strSql, con);
                    int result = cmd.ExecuteNonQuery();
                    return result;
                }
            }
            catch (Exception e)
            {
                //异常写入日志
                return 0;
            }
        }
    }
}