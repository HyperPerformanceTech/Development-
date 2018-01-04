source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# global gems
gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.5'


### joemusacchia added these gems
gem 'foundation-rails', '~> 5.4.5.0'
gem 'webpacker'
gem 'devise'
gem 'carrierwave', '~>1.0'
gem 'fog'
gem 'jquery-rails'
gem 'mini_magick'

group :development, :test do
  ### joemusacchia added these gems
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'capybara'
  gem 'launchy'
  gem 'factory_bot_rails'
  gem 'valid_attribute'
  gem 'shoulda'
  gem 'shoulda-matchers', require: false
  gem 'dotenv-rails'
  gem 'rack-test'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
