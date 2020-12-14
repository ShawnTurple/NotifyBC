---
title: List-unsubscribe by Email
permalink: /docs/config-listUnsubscribeByEmail/
---

Some email clients provide a consistent UI to unsubscribe if an unsubscription email address is supplied. For example, newer iOS built-in email app will display following banner

<img :src="$withBase('/img/list-unsubscription.png')" alt="list unsubscription">

To support this unsubscription method, _NotifyBC_ implements a custom inbound SMTP server to transform received emails sent to address _un-{subscriptionId}-{unsubscriptionCode}@{inboundSmtpServerDomain}_ to _NotifyBC_ unsubscribing API calls. This unsubscription email address is generated by _NotifyBC_ and set in header _List-Unsubscribe_ of all notification emails.

To enable list-unsubscribe by email

- set up [inbound smtp server](../config-inboundSmtpServer/)
- verify config _notification.handleListUnsubscribeByEmail_ is set to true or absent in _/server/config.local.js_

To disable list-unsubscribe by email, set _notification.handleListUnsubscribeByEmail_ to false in _/server/config.local.js_

```
module.exports = {
  ...
  notification: {
    ...
    handleListUnsubscribeByEmail: false,
  }
}
```