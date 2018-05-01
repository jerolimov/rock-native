Pod::Spec.new do |s|
  s.name         = "rock-native-webview"
  s.version      = "0.1.0"
  s.summary      = "Rock Native WebView"
  s.description  = <<-DESC
                  RNWebView
                   DESC
  s.homepage     = "https://github.com/rocknative/rock-native-webview"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/jerolimov/RNWebView.git", :tag => "master" }
  s.source_files  = "**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
  #s.dependency "others"

end
