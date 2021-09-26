require 'thread'

count1 = count2 = 0
difference = 0

Thread.new do
  loop do
    count1 += 1
    count2 += 1
  end
end
Thread.new do
  loop do
    difference += (count1 - count2).abs
    p [count1, count2] unless count1 == count2
  end
end

sleep 10

puts "count1: #{count1}"
puts "count2: #{count2}"
puts "difference: #{difference}"