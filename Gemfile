source 'https://rubygems.org'

ruby '2.3.0'

gem 'rails', '>= 5.0.0.rc1', '< 5.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'turbolinks', '~> 5.x'
gem 'jbuilder', '~> 2.0'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'slim-rails'
gem 'devise'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'faker'
end

group :development do
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
	gem 'capybara'
	gem 'database_cleaner'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
