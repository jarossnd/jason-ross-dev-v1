---
title: Installing the SharePoint Online Management Shell in 2022
date: "2022-01-09T00:00:00.000Z"
description: "I walk you through installing the SharePoint Online Management Shell and connecting to your SharePoint Online Tenant"
tags: ['sharepoint', 'powershell']
---

## Overview

Today I am going to walk you through installing the SharePoint Online Management Shell and connecting to your tenant. 

The SharePoint Online Management Shell, once installed, allows Global and SharePoint Administrators to run cmdlets against their SharePoint Online tenant to configure tenant level SharePoint settings.

For example, you can configure legacy authentication, create/delete/update sites, configure public and private CDN's, and more.

There are two different installation methods I will cover in this article. The first method is to use the MSI installer, and the second method from PowerShell using the Install-Module cmdlet. I will cover both methods and some noticeable differences you will want to keep in mind.

## Method 1: MSI Installer

Installing the SharePoint Online Managemnent Shell using the MSI intaller will give you an entry in add/remove programs where you can easily uninstall later. It also creates shortcuts in the Start Menu that you can click on to open the SharePoint Online Management Shell. This option works best for those that may not be as familiar with PowerShell. If you already have the SharePoint Online Management Shell installed, you will need to remove it prior to installing the latest version.

1. Browse to https://www.microsoft.com/en-us/download/details.aspx?id=35588
2. Select your language and click Download
3. Select where you want to save the MSI
4. Open SharePointOnlineManagementShell_XXXXX-XXXXX_en-us.msi

## Method 2: Install-Module

For those that live in PowerShell, this option typically works best because you can install the module right from any PowerShell window. However, you will not get the SharePoint Online Management Shell shortcuts in the Start Menu nor will you see an entry in add/remove programs if you want to uninstall at a later time. You will need to remove the module through PowerShell.

## Connecting to your tenant

## Logging into a Government GCC High or DoD tenant

## Issues

### Outdated version

![Programs and Features](/assets/spo-mgmt-shell-version-number-download-page.png)

![Programs and Features](/assets/add-remove-programs-spo-mgmt-shell.png)