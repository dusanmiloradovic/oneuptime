module.exports = [{
    allowedVariables: ['{{userName}} : User display name.', '{{monitorName}} : Name of the monitor on which incident has occured.', '{{projectName}} : Name of the project on which the incident has occured.', '{{incidentTime}} : Time at which this incident occured.', '{{incidentType}} : Type of incident.', '{{userId}} : Unique identifier for user account.', '{{projectId}} : Unique identifier for the current project.'],
    emailType: 'Subscriber Incident Created',
    subject: '{{projectName}}/{{monitorName}}: Incident Created',
    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
    <meta name="viewport" content="width=3Ddevice-width">
    <title>Welcome to Fyipe.</title>
    <style>
      /**
  * IMPORTANT:
  * Please read before changing anything, CSS involved in our HTML emails is
  * extremely specific and written a certain way for a reason. It might not make
  * sense in a normal setting but Outlook loves it this way.
  *
  * !!! [override] prevents Yahoo Mail breaking media queries. It must be used
  * !!! at the beginning of every line of CSS inside a media query.
  * !!! Do not remove.
  *
  * !!! div[style*="margin: 16px 0"] allows us to target a weird margin
  * !!! bug in Android's email client.
  * !!! Do not remove.
  *
  * Also, the img files are hosted on S3. Please don't break these URLs!
  * The images are also versioned by date, so please update the URLs accordingly
  * if you create new versions
  *
***/


/**
  * # Root
  * - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
  border: 0 !important;
  margin: 0 !important;
  outline: 0 !important;
  padding: 0 !important;
  text-decoration: none !important;
}

a, span,
td, th {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

/**
  * # Delink
  * - Classes for overriding clients which creates links out of things like
  *   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
  color: #000000 !important;
  text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
  color: white !important;
  text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
  color: #000000 !important;
  text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
  color: #8898aa !important;
  text-decoration: none !important;
}
/** */

.ii a[href] {
    color: #000000;
}

/**
  * # Mobile
  * - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

  /**
    * # Wrapper
  **/

  body[override] table.st-Wrapper,
  body[override] table.st-Width.st-Width--mobile {
    min-width: 100% !important;
    width: 100% !important;
  }

  /**
    * # Spacer
  **/

  /** Modifier: gutter */
  body[override] td.st-Spacer.st-Spacer--gutter {
    width: 32px !important;
  }
  /** */

  /** Modifier: kill */
  body[override] td.st-Spacer.st-Spacer--kill {
    width: 0 !important;
  }
  /** */

  /** Modifier: emailEnd */
  body[override] td.st-Spacer.st-Spacer--emailEnd {
    height: 32px !important;
  }
  /** */

  /**
    * # Font
  **/

  /** Modifier: title */
  body[override] td.st-Font.st-Font--title,
  body[override] td.st-Font.st-Font--title span,
  body[override] td.st-Font.st-Font--title a {
    font-size: 28px !important;
    line-height: 36px !important;
  }
  /** */

  /** Modifier: header */
  body[override] td.st-Font.st-Font--header,
  body[override] td.st-Font.st-Font--header span,
  body[override] td.st-Font.st-Font--header a {
    font-size: 24px !important;
    line-height: 32px !important;
  }
  /** */

  /** Modifier: body */
  body[override] td.st-Font.st-Font--body,
  body[override] td.st-Font.st-Font--body span,
  body[override] td.st-Font.st-Font--body a {
    font-size: 18px !important;
    line-height: 28px !important;
  }
  /** */

  /** Modifier: caption */
  body[override] td.st-Font.st-Font--caption,
  body[override] td.st-Font.st-Font--caption span,
  body[override] td.st-Font.st-Font--caption a {
    font-size: 14px !important;
    line-height: 20px !important;
  }
  /** */

  /** Modifier: simplified */
  body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
    width: auto !important;
  }

  body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
    width: 0 !important;
  }

  /**
    * # Divider
  **/

  body[override] table.st-Divider td.st-Spacer.st-Spacer--gutter,
  body[override] tr.st-Divider td.st-Spacer.st-Spacer--gutter {
    background-color: #000000;
  }

  /**
    * # Blocks
  **/

  body[override] table.st-Blocks table.st-Blocks-inner {
      border-radius: 0 !important;
  }

  body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
      display: block !important;
  }

  /**
    * # Button
  **/

  body[override] table.st-Button {
      margin: 0 auto !important;
      width: 100% !important;
  }

  body[override] table.st-Button td.st-Button-area,
  body[override] table.st-Button td.st-Button-area a.st-Button-link,
  body[override] table.st-Button td.st-Button-area span.st-Button-internal{
    height: 44px !important;
    line-height: 44px !important;
    font-size: 18px !important;
    vertical-align: middle !important;
  }
}

    </style>
  </head>
  <body class="st-Email" bgcolor="f6f9fc" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

    <!-- Background -->
    <table class="st-Background" bgcolor="f6f9fc" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
      <tbody>
        <tr>
          <td style="border: 0; margin: 0; padding: 0;">

            <!-- Wrapper -->
            <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
              <tbody>
                <tr>
                  <td style="border: 0; margin: 0; padding: 0;">


  
  <table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
        <div>
          <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href={{homeURL}}>

            <img alt="Fyipe" border="0" style="height:50px; width:50px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://www.dropbox.com/s/dwawm02f1toxnm8/Fyipe-Icon.png?dl=0&raw=1">
          </a>
        </div>
      </td>
      <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr class="st-Divider">
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">

     	<h3>{{projectName}}/{{monitorName}}: Incident Created!</h3>

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

     
      Hi {{userName}},
 

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

     
      <strong￼ style="color: #000000 !important;">{{projectName}}/{{monitorName}} is {{incidentType}}</strong>. A new incident has been created on {{incidentTime}} and is available on the status page
 

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    You are receiving this mail because you are subscribed to this monitor.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>

      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

     
    	Fyipe Team.
 

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>

  <table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr class="st-Divider">
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
        <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
          © 2019 HackerBay Inc.
        </span>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>


                  </td>
                </tr>
              </tbody>
            </table>
            <!-- /Wrapper -->

          </td>
        </tr>
        <tr>
          <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
            <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- /Background -->
</body></html>
`
},
{
    allowedVariables: ['{{userName}} : User display name.', '{{monitorName}} : Name of the monitor on which incident has occured.', '{{projectName}} : Name of the project on which the incident has occured.', '{{incidentTime}} : Time at which this incident occured.', '{{incidentType}} : Type of incident.', '{{userId}} : Unique identifier for user account.', '{{projectId}} : Unique identifier for the current project.'],
    emailType: 'Subscriber Incident Acknowldeged',
    subject: '{{projectName}}/{{monitorName}}: Incident Acknowldeged',
    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
  <meta name="viewport" content="width=3Ddevice-width">
  <title>Welcome to Fyipe.</title>
  <style>
    /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
  color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
  * # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
  min-width: 100% !important;
  width: 100% !important;
}

/**
  * # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
  width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
  width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
  height: 32px !important;
}
/** */

/**
  * # Font
**/

/** Modifier: title */
body[override] td.st-Font.st-Font--title,
body[override] td.st-Font.st-Font--title span,
body[override] td.st-Font.st-Font--title a {
  font-size: 28px !important;
  line-height: 36px !important;
}
/** */

/** Modifier: header */
body[override] td.st-Font.st-Font--header,
body[override] td.st-Font.st-Font--header span,
body[override] td.st-Font.st-Font--header a {
  font-size: 24px !important;
  line-height: 32px !important;
}
/** */

/** Modifier: body */
body[override] td.st-Font.st-Font--body,
body[override] td.st-Font.st-Font--body span,
body[override] td.st-Font.st-Font--body a {
  font-size: 18px !important;
  line-height: 28px !important;
}
/** */

/** Modifier: caption */
body[override] td.st-Font.st-Font--caption,
body[override] td.st-Font.st-Font--caption span,
body[override] td.st-Font.st-Font--caption a {
  font-size: 14px !important;
  line-height: 20px !important;
}
/** */

/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
  width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
  width: 0 !important;
}

/**
  * # Divider
**/

body[override] table.st-Divider td.st-Spacer.st-Spacer--gutter,
body[override] tr.st-Divider td.st-Spacer.st-Spacer--gutter {
  background-color: #000000;
}

/**
  * # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
    border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
    display: block !important;
}

/**
  * # Button
**/

body[override] table.st-Button {
    margin: 0 auto !important;
    width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
  height: 44px !important;
  line-height: 44px !important;
  font-size: 18px !important;
  vertical-align: middle !important;
}
}

  </style>
</head>
<body class="st-Email" bgcolor="f6f9fc" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

  <!-- Background -->
  <table class="st-Background" bgcolor="f6f9fc" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
    <tbody>
      <tr>
        <td style="border: 0; margin: 0; padding: 0;">

          <!-- Wrapper -->
          <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
            <tbody>
              <tr>
                <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
      <div>
        <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://fyipe.com">
          <img alt="Fyipe" border="0" style="height:50px; width:50px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://www.dropbox.com/s/dwawm02f1toxnm8/Fyipe-Icon.png?dl=0&raw=1">
        </a>
      </div>
    </td>
    <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">

     <h3>{{projectName}}/{{monitorName}}: Incident Acknowledged!</h3>

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    Hi {{userName}},


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    <strong￼ style="color: #000000 !important;">{{projectName}}/{{monitorName}} is {{incidentType}}</strong>. An incident has been acknowledged on {{incidentTime}} and is available on the status page


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

 
  You are receiving this mail because you are subscribed to this monitor.


  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>

  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    Fyipe Team.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
      <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
        © 2019 HackerBay Inc.
      </span>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>


                </td>
              </tr>
            </tbody>
          </table>
          <!-- /Wrapper -->

        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /Background -->
</body></html>
`
},
{
    allowedVariables: ['{{userName}} : User display name.', '{{monitorName}} : Name of the monitor on which incident has occured.', '{{projectName}} : Name of the project on which the incident has occured.', '{{incidentTime}} : Time at which this incident occured.', '{{incidentType}} : Type of incident.', '{{userId}} : Unique identifier for user account.', '{{projectId}} : Unique identifier for the current project.'],
    emailType: 'Subscriber Incident Resolved',
    subject: '{{projectName}}/{{monitorName}}: Incident Resolved',
    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
  <meta name="viewport" content="width=3Ddevice-width">
  <title>Welcome to Fyipe.</title>
  <style>
    /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
  color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
  * # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
  min-width: 100% !important;
  width: 100% !important;
}

/**
  * # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
  width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
  width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
  height: 32px !important;
}
/** */

/**
  * # Font
**/

/** Modifier: title */
body[override] td.st-Font.st-Font--title,
body[override] td.st-Font.st-Font--title span,
body[override] td.st-Font.st-Font--title a {
  font-size: 28px !important;
  line-height: 36px !important;
}
/** */

/** Modifier: header */
body[override] td.st-Font.st-Font--header,
body[override] td.st-Font.st-Font--header span,
body[override] td.st-Font.st-Font--header a {
  font-size: 24px !important;
  line-height: 32px !important;
}
/** */

/** Modifier: body */
body[override] td.st-Font.st-Font--body,
body[override] td.st-Font.st-Font--body span,
body[override] td.st-Font.st-Font--body a {
  font-size: 18px !important;
  line-height: 28px !important;
}
/** */

/** Modifier: caption */
body[override] td.st-Font.st-Font--caption,
body[override] td.st-Font.st-Font--caption span,
body[override] td.st-Font.st-Font--caption a {
  font-size: 14px !important;
  line-height: 20px !important;
}
/** */

/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
  width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
  width: 0 !important;
}

/**
  * # Divider
**/

body[override] table.st-Divider td.st-Spacer.st-Spacer--gutter,
body[override] tr.st-Divider td.st-Spacer.st-Spacer--gutter {
  background-color: #000000;
}

/**
  * # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
    border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
    display: block !important;
}

/**
  * # Button
**/

body[override] table.st-Button {
    margin: 0 auto !important;
    width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
  height: 44px !important;
  line-height: 44px !important;
  font-size: 18px !important;
  vertical-align: middle !important;
}
}

  </style>
</head>
<body class="st-Email" bgcolor="f6f9fc" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

  <!-- Background -->
  <table class="st-Background" bgcolor="f6f9fc" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
    <tbody>
      <tr>
        <td style="border: 0; margin: 0; padding: 0;">

          <!-- Wrapper -->
          <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
            <tbody>
              <tr>
                <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
      <div>
        <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://fyipe.com">
          <img alt="Fyipe" border="0" style="height:50px; width:50px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://www.dropbox.com/s/dwawm02f1toxnm8/Fyipe-Icon.png?dl=0&raw=1">
        </a>
      </div>
    </td>
    <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">

     <h3>{{projectName}}/{{monitorName}}: Incident Resolved!</h3>

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

    Hi {{userName}},

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

    <strong￼ style="color: #000000 !important;">{{projectName}}/{{monitorName}} is {{incidentType}}</strong>. An incident has been resolved on {{incidentTime}} and is available on the status page

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  You are receiving this mail because you are subscribed to this monitor.

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    Fyipe Team.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
      <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
        © 2019 HackerBay Inc.
      </span>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>


                </td>
              </tr>
            </tbody>
          </table>
          <!-- /Wrapper -->

        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /Background -->
</body></html>
`
}
];
