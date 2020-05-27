require "test_helper"

class CommentMailboxTest < ActionMailbox::TestCase
  test "register comment from reply" do
    id = Comment.last.id

    assert_difference("Comment.count") do
      receive_inbound_email_from_mail \
        charset: "UTF-8",
        to: "'blog_app' <comment+#{id}@example.com>",
        from: "'someone' <someone@example.com",
        subject: "Re: notification",
        body: "こめんとへの返信"
    end

    assert_equal "こめんとへの返信", Comment.last.body
  end
end
