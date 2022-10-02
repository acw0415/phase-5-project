require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Phase5Project
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # config.middleware.insert_before ActionDispatch::Static, Rack::Cors do
    #   allow do
    #     origins '*'
    #     resource '*', :headers => :any, :methods => [:get, :post, :options]
    #   end
    # end

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

    # config.action_dispatch.cookies_same_site_protection = :strict

    config.api_only = true

    config.hosts << "http://localhost:4000"
  end
end
