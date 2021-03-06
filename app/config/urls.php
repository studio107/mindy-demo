<?php

use Mindy\Router\Patterns;

return [
    '/user' => new Patterns('User.urls', 'user'),
    '/core' => new Patterns('Modules.Admin.urls', 'admin'),
    '/core/files' => new Patterns('Modules.Files.urls', 'files'),
    '/core/engine' => new Patterns('Modules.Core.urls', 'core'),
    '/mail' => new Patterns('Modules.Mail.urls', 'mail'),
    '' => new Patterns('Modules.Sitemap.urls', 'sitemap'),
    '/robots.txt' => new Patterns('Modules.Sites.urls', 'sites'),
    '/pages/' => new Patterns('Modules.Pages.urls', 'page'),
    '/' => new Patterns('Modules.Demo.urls', 'demo'),
];
