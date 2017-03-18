﻿using Liyanjie.ApiExplorer.Demo.AspNetCore.Mvc.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Liyanjie.ApiExplorer.Demo.AspNetCore.Mvc.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [ApiExplorerSettings(GroupName = "订单")]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        /// <summary>
        /// 获取订单列表
        /// </summary>
        /// <param name="pageNumber">页码</param>
        /// <param name="pageSize">行数</param>
        /// <returns></returns>
        /// <response code="200">订单列表</response>
        [HttpGet("{pageNumber:int=1}/{pageSize:int=10}")]
        [LiyanjieProducesResponseType(typeof(IEnumerable<Order>), 200, "CreateTime")]
        public IEnumerable<Order> Get([FromRoute]int? pageNumber, [FromRoute]int? pageSize)
        {
            return new List<Order>
            {
                new Order
                {
                    ID = Guid.NewGuid(),
                    Serial = "Test1",
                    CreateTime = DateTimeOffset.Now,
                },
                new Order
                {
                    ID = Guid.NewGuid(),
                    Serial = "Test2",
                    CreateTime = DateTimeOffset.Now,
                }
            };
        }

        /// <summary>
        /// 获取指定ID的订单信息
        /// </summary>
        /// <param name="id">订单ID</param>
        /// <returns></returns>
        /// <response code="200">订单信息 <see cref="Order"/></response>
        /// <response code="404">未找到订单</response>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Order), 200)]
        [ProducesResponseType(typeof(object), 404)]
        public Order Get([FromRoute]Guid id)
        {
            return new Order
            {
                ID = Guid.NewGuid(),
                Serial = "Test2",
                CreateTime = DateTimeOffset.Now,
            };
        }

        /// <summary>
        /// 创建订单
        /// </summary>
        /// <param name="order"></param>
        [HttpPost]
        public void Post([FromBody, Bind("Serial")]Order order)
        {
        }

        /// <summary>
        /// 修改订单
        /// </summary>
        /// <param name="id"></param>
        /// <param name="order"></param>
        [HttpPut("{id}")]
        public void Put([FromRoute]Guid id, [FromBody, Bind("Serial")]Order order)
        {
        }

        /// <summary>
        /// 删除订单
        /// </summary>
        /// <param name="id">订单ID</param>
        [HttpDelete("{id}")]
        public void Delete([FromRoute]Guid id)
        {
        }
    }
}