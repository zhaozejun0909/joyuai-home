import React from 'react';
export const Nav01DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://e.joyuai.com/joyuai/logo_hori.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: 'https://e.joyuai.com/',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>首页</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item~lefe7qumx2n',
        className: 'header0-item',
        children: {
          href: '/about.html',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>关于我们</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item~leia1t8tzqu',
        className: 'header0-item',
        children: {
          href: '/solution.html',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>产品体系</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item~lesgglgwxrn',
        className: 'header0-item',
        children: {
          href: '/case.html',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>成功案例</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/contact.html',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>联系景宇</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Feature10DataSource = {
  wrapper: {
    className: 'home-page-wrapper content1-wrapper lef2j7t1ukh-editor_css',
  },
  OverPack: {
    className: 'home-page content1 lefhbajv6f-editor_css',
    playScale: 0.3,
  },
  imgWrapper: {
    className: 'content1-img lef2ju11g8-editor_css',
    md: 10,
    xs: 24,
  },
  img: {
    children: 'https://e.joyuai.com/joyuai/pic_wxgzh.png',
    className: 'lef2f61oi9i-editor_css',
  },
  textWrapper: {
    className: 'content1-text lef2jmsa6a8-editor_css',
    md: 14,
    xs: 24,
  },
  title: {
    className: 'content1-title lef2f6ipx7e-editor_css',
    children: (
      <span>
        <p>上海景宇宙智能科技集团有限公司</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content lefhbkfyamj-editor_css',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <p>联系地址：上海市嘉定区景域大道88号</p>
                    <p>微信公众号：景宇智能</p>
                    <p>
                      电子邮箱：mkt@joyuai.com<br />
                    </p>
                    <p>合作热线：021-51212088-6309</p>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
export const Footer01DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper lefjiq7ouo9-editor_css',
  },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright lefhbrjeb8p-editor_css',
    children: (
      <span>
        <span>
          <span>
            Copyright©2023,{' '}
            <a href="https://www.joyuai.com" target="_blank">
              www.joyuai.com
            </a>{' '}
            ｜ 沪ICP备19031977号-1<br />
          </span>
        </span>
      </span>
    ),
  },
};
